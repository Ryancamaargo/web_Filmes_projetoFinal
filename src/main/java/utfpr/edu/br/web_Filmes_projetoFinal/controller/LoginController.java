package utfpr.edu.br.web_Filmes_projetoFinal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("login")
    public String login() {
        return "login";
    }
}
