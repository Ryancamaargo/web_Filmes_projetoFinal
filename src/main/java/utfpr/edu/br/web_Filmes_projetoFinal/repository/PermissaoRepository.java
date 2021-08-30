package utfpr.edu.br.web_Filmes_projetoFinal.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Permissao;

public interface PermissaoRepository extends JpaRepository<Permissao, Long> {

    Permissao findByNome(String nome);
}
