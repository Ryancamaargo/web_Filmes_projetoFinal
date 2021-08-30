package utfpr.edu.br.web_Filmes_projetoFinal.service;

import org.springframework.mail.SimpleMailMessage;
import utfpr.edu.br.web_Filmes_projetoFinal.model.PasswordResetToken;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;

public interface SecurityUserService extends CrudService<PasswordResetToken, Long> {
    Usuario getUserByPasswordResetToken(String token);

    String validatePasswordResetToken(String token);

    boolean isTokenFound(PasswordResetToken passToken);

    boolean isTokenExpired(PasswordResetToken passToken);

    SimpleMailMessage constructResetTokenEmail(
            String contextPath, String token, Usuario usuario);

    SimpleMailMessage constructEmail(String subject, String body,
                                     Usuario usuario);


    public Usuario getUsuarioPrincipal();
}
