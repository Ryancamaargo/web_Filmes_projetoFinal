package utfpr.edu.br.web_Filmes_projetoFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Itens;
import utfpr.edu.br.web_Filmes_projetoFinal.service.ItensService;

//
//import javax.validation.Valid;

@Controller
@RequestMapping("item")
public class ItemController {
	
	@Autowired
	private ItensService itensService;

	@GetMapping
	public String list(Model model) {
		model.addAttribute("itens", itensService.findAll());
		return "item/list";
	}



	@GetMapping("new")
	public String form(Model model) {
		model.addAttribute("item", new Itens());
//		carregarCombos(model);
		return "item/form";
	}

	@PostMapping
	private String save(Itens item,
						BindingResult result,
						Model model,
						RedirectAttributes attributes) {
		if (result.hasErrors()) {
//			carregarCombos(model);
			return "item/form";
		}
		itensService.save(item);
		attributes.addFlashAttribute("sucesso", "Registro salvo com sucesso!");
		return "redirect:/item";
	}

	@GetMapping("{id}")
	private String form(@PathVariable("id") Long id, Model model) {
		model.addAttribute("item", itensService.findOne(id));
		System.out.println(itensService.findOne(id));
//		carregarCombos(model);
		return "item/form";
	}

	@DeleteMapping("{id}")
	private String delete(@PathVariable("id") Long id, RedirectAttributes attributes) {
		try {
			itensService.delete(id);
			attributes.addFlashAttribute("sucesso", "Registro removido com sucesso!");
		} catch (Exception ex) {
			attributes.addFlashAttribute("erro", "Falha ao remover o registro!");
		}

		return "redirect:/item";
	}

	@GetMapping("view/{id}")
	private String view(@PathVariable("id") Long id, Model model) {
		model.addAttribute("item", itensService.findOne(id));
		return "item/view";
	}
}






