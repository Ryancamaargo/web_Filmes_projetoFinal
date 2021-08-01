package utfpr.edu.br.web_Filmes_projetoFinal.repository;

import  utfpr.edu.br.web_Filmes_projetoFinal.model.Itens;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItensRepository extends JpaRepository<Itens, Long>{
    List<Itens> findByCategoriaNome(String nome);

}












