package utfpr.edu.br.web_Filmes_projetoFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Venda;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.VendaRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.service.ItensService;
import utfpr.edu.br.web_Filmes_projetoFinal.service.SecurityUserService;
import utfpr.edu.br.web_Filmes_projetoFinal.service.VendaService;
import utfpr.edu.br.web_Filmes_projetoFinal.service.impl.VendaServiceImpl;

import javax.validation.Valid;
import java.util.Date;


@Controller
public class VendaController {


    @Autowired
    private VendaService vendaService;
    @Autowired
    private VendaServiceImpl vendaServiceImpl;
    @Autowired
    private VendaRepository vendaRepository;
    @Autowired
    private SecurityUserService securityUserService;


    @GetMapping("venda")
    public String venda() {
        return "venda";
    }

    @PostMapping("venda")
    public ResponseEntity<?> save(@RequestBody @Valid Venda venda,
                                  BindingResult result,
                                  Model model) {
        try {
            if (result.hasErrors()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }

            Usuario usuario = securityUserService.getUsuarioPrincipal();
            venda.setUsuario(usuario);
            venda.setData(new Date());
            venda.getVendaItens().forEach(vi -> vi.setVenda(venda));

            vendaService.save(venda);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }


    @GetMapping("venda/{id}")
    private String form(@PathVariable("id") Long id, Model model) {
        model.addAttribute("venda", vendaService.findOne(id));
        return "vendaDoHistorico";
    }

    @GetMapping("listaVenda")
    public String listaVenda(Model model) {
        Long idUsuario = securityUserService.getUsuarioPrincipal().getId();
        model.addAttribute("listaVenda", vendaRepository.findAllByUsuarioId(idUsuario));
        return "listaVenda";
    }

}






