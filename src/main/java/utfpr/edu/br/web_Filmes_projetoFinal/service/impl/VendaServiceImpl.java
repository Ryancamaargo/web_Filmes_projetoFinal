package utfpr.edu.br.web_Filmes_projetoFinal.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import utfpr.edu.br.web_Filmes_projetoFinal.model.Venda;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.VendaRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.service.VendaService;

import java.util.List;

@Service
public class VendaServiceImpl extends CrudServiceImpl<Venda, Long> implements VendaService {
    @Autowired
    private VendaRepository vendaRepository;

    @Override
    protected JpaRepository<Venda, Long> getRepository() {
        return vendaRepository;
    }
    @Override
    public Venda save(Venda entity) {
        return super.save(entity);
    }

//    @Override
//    public List<Venda> findAllByUsuarioId(Long id) {
//        return vendaRepository.findAllByUsuarioId(id);
//    }
}
