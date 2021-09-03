package utfpr.edu.br.web_Filmes_projetoFinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.model.ResetSenha;

public interface PasswordTokenRepository extends JpaRepository<ResetSenha,Long> {
    ResetSenha findByToken(String token);
    /*essa parte de token, tive ajuda desse link: https://www.baeldung.com/spring-security-registration-i-forgot-my-password*/
}
