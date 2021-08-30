package utfpr.edu.br.web_Filmes_projetoFinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.model.PasswordResetToken;

public interface PasswordTokenRepository extends JpaRepository<PasswordResetToken,Long> {
    PasswordResetToken findByToken(String token);
}
