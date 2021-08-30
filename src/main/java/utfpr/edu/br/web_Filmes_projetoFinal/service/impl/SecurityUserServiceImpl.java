package utfpr.edu.br.web_Filmes_projetoFinal.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import utfpr.edu.br.web_Filmes_projetoFinal.model.PasswordResetToken;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.PasswordTokenRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.service.SecurityUserService;

import static java.time.LocalDate.now;

@Service
public class SecurityUserServiceImpl extends CrudServiceImpl<PasswordResetToken, Long> implements SecurityUserService {


    @Autowired
    private PasswordTokenRepository passwordTokenRepository;

    @Override
    public Usuario getUserByPasswordResetToken(String token) {
        var passwordToken = passwordTokenRepository.findByToken(token);
        return passwordToken != null ? passwordToken.getUsuario() : null;
    }

    @Override
    protected JpaRepository<PasswordResetToken, Long> getRepository() {
        return passwordTokenRepository;
    }


    @Override
    public String validatePasswordResetToken(String token) {
        final PasswordResetToken passToken = passwordTokenRepository.findByToken(token);

        return !isTokenFound(passToken) ? "invalidToken"
                : isTokenExpired(passToken) ? "expired"
                : null;
    }

    @Override
    public boolean isTokenFound(PasswordResetToken passToken) {
        return passToken != null;
    }

    @Override
    public boolean isTokenExpired(PasswordResetToken passToken) {
        return passToken.getExpiryDate().isBefore(now());
    }

    @Override
    public SimpleMailMessage constructResetTokenEmail(
            String contextPath, String token, Usuario usuario) {
        String url = contextPath + "updatePassword?token=" + token;
        String message = "Acesse este link para redefinir sua senha";
        return constructEmail("Alterar senha", message + " \r\n" + url, usuario);
    }

    @Override
    public SimpleMailMessage constructEmail(String subject, String body,
                                             Usuario usuario) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setSubject(subject);
        email.setText(body);
        email.setTo(usuario.getEmail());
        email.setFrom("programacaoweb2021utfpr@gmail.com");
        return email;
    }

    @Override
    public Usuario getUsuarioPrincipal() {
        return (Usuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}
