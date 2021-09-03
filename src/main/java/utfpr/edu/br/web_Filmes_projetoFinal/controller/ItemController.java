package utfpr.edu.br.web_Filmes_projetoFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Itens;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Venda;
import utfpr.edu.br.web_Filmes_projetoFinal.service.ItensService;
import utfpr.edu.br.web_Filmes_projetoFinal.service.SecurityUserService;
import utfpr.edu.br.web_Filmes_projetoFinal.service.VendaService;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.Date;


@Controller
@RequestMapping("item")
public class ItemController {

    @Autowired
    private ItensService itensService;


    @GetMapping("{id}")
    private String form(@PathVariable("id") Long id, Model model) {
        model.addAttribute("item", itensService.findOne(id));
        return "Itens/itensInterno";
    }

    @GetMapping("carrinho")
    public String carrinho() {
        return "carrinho";
    }


}






