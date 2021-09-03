package utfpr.edu.br.web_Filmes_projetoFinal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Itens;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.ItensRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.service.impl.CrudServiceImpl;

public interface ItensService extends CrudService<Itens, Long> {
}
