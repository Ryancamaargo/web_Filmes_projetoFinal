package utfpr.edu.br.web_Filmes_projetoFinal.service;

import org.springframework.mail.SimpleMailMessage;
import utfpr.edu.br.web_Filmes_projetoFinal.model.ResetSenha;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;

public interface SecurityUserService extends CrudService<ResetSenha, Long> {
    Usuario getUserByPasswordResetToken(String token);

    String validatePasswordResetToken(String token);

    SimpleMailMessage constructResetTokenEmail(
            String contextPath, String token, Usuario usuario);

    SimpleMailMessage constructEmail(String subject, String body,
                                     Usuario usuario);

    boolean isTokenFound(ResetSenha passToken);


    public Usuario getUsuarioPrincipal();
}
