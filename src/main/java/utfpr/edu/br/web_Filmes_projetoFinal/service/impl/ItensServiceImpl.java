package utfpr.edu.br.web_Filmes_projetoFinal.service.impl;

import utfpr.edu.br.web_Filmes_projetoFinal.model.Categoria;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Itens;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.ItensRepository;

import utfpr.edu.br.web_Filmes_projetoFinal.service.ItensService;

@Service
public class ItensServiceImpl extends CrudServiceImpl<Itens, Long> implements ItensService {

    @Autowired
    private ItensRepository itensRepository;

    @Override
    protected JpaRepository<Itens, Long> getRepository() {
        return itensRepository;
    }

}
