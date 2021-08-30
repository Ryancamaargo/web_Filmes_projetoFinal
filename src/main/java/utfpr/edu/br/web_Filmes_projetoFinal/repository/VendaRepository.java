package utfpr.edu.br.web_Filmes_projetoFinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Venda;

public interface VendaRepository  extends JpaRepository<Venda, Long> {
}
