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
import utfpr.edu.br.web_Filmes_projetoFinal.service.ItensService;
import utfpr.edu.br.web_Filmes_projetoFinal.service.SecurityUserService;
import utfpr.edu.br.web_Filmes_projetoFinal.service.VendaService;

import javax.validation.Valid;
import java.util.Date;

//
//import javax.validation.Valid;

@Controller
public class VendaController {
	

	@Autowired
	private VendaService vendaService;
	@Autowired
	private SecurityUserService securityUserService;

	@GetMapping("venda")
	public String venda() {
		return "venda";
	}

	@GetMapping("vendaDoHistorico")
	public String vendaDoHistorico() {
		return "vendaDoHistorico";
	}

	@GetMapping("listaVenda")
	public String listaVenda() {
		return "listaVenda";
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

}






