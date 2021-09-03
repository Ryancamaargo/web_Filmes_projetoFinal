package utfpr.edu.br.web_Filmes_projetoFinal.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import utfpr.edu.br.web_Filmes_projetoFinal.model.ResetSenha;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.PasswordTokenRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.service.SecurityUserService;


@Service
public class SecurityUserServiceImpl extends CrudServiceImpl<ResetSenha, Long> implements SecurityUserService {


    @Autowired
    private PasswordTokenRepository passwordTokenRepository;

    @Override
    protected JpaRepository<ResetSenha, Long> getRepository() {
        return passwordTokenRepository;
    }


    @Override
    public Usuario getUsuarioPrincipal() {
        return (Usuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @Override
    public Usuario getUserByPasswordResetToken(String token) {
        var passwordToken = passwordTokenRepository.findByToken(token);
        return passwordToken != null ? passwordToken.getUsuario() : null;
    }


    @Override
    public String validatePasswordResetToken(String token) {
        final ResetSenha passToken = passwordTokenRepository.findByToken(token);

        return !isTokenFound(passToken) ? "invalidToken"
                : null;
    }

    @Override
    public SimpleMailMessage constructResetTokenEmail(
            String contextPath, String token, Usuario usuario) {
        String url = contextPath + "alterarSenha?token=" + token;
        String message = "Acesse este link para redefinir sua senha, use esse token para alterar: "+token;
        return constructEmail("Alterar senha RYANFLIX", message + " \r\n" + url, usuario);
    }

    @Override
    public boolean isTokenFound(ResetSenha passToken) {
        return passToken != null;
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

}
