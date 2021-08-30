package utfpr.edu.br.web_Filmes_projetoFinal.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.ItensRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.service.ItensService;


@Controller
public class IndexController {

	@Autowired
	private ItensService itemService;
	@Autowired
	private ItensRepository itemRepository;
	@GetMapping("")
	public String index(Model model) {
		model.addAttribute("itens", itemService.findAll());
		return "index";
	}

	@GetMapping("/filmes")
	public String filmes(Model model) {
		model.addAttribute("itens", itemRepository.findByCategoriaNome("filmes"));
		return "index";
	}

	@GetMapping("/series")
	public String series(Model model) {
		model.addAttribute("itens", itemRepository.findByCategoriaNome("series"));
		return "index";
	}

	@GetMapping(value = {"teste", "teste2"})
	public String teste() {
		return "login";
	}



}
