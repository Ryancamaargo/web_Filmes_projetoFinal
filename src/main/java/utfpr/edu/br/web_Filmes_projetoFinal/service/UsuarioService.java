package utfpr.edu.br.web_Filmes_projetoFinal.service;


import org.springframework.security.core.userdetails.UserDetails;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;

public interface UsuarioService extends CrudService<Usuario, Long>{
    void createPasswordResetTokenForUser(Usuario usuario, String token);

    void changeUserPassword(Usuario usuario, String newPassword);

    UserDetails loadUserByEmail(String email);
}
