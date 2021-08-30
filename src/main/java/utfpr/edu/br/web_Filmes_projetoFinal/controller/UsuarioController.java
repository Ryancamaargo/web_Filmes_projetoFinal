package utfpr.edu.br.web_Filmes_projetoFinal.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;
import utfpr.edu.br.web_Filmes_projetoFinal.senha.GenericResponse;
import utfpr.edu.br.web_Filmes_projetoFinal.senha.PasswordDto;
import utfpr.edu.br.web_Filmes_projetoFinal.service.SecurityUserService;
import utfpr.edu.br.web_Filmes_projetoFinal.service.UsuarioService;
import utfpr.edu.br.web_Filmes_projetoFinal.service.impl.UsuarioServiceImpl;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Locale;
import java.util.UUID;

@Controller
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private UsuarioServiceImpl usuarioServiceImpl;
    @Autowired
    private SecurityUserService securityUserService;
    @Autowired
    private JavaMailSender mailSender;


    @PostMapping("cadastrarse")
    private String save(@Valid Usuario usuario, BindingResult result,
                        Model model,
                        RedirectAttributes attributes) {
        if (result.hasErrors()) {
            model.addAttribute("usuario", usuario);
            return "cadastrarse";
        }

        usuarioService.save(usuario);
        attributes.addFlashAttribute("sucesso",
                "Registro salvo com sucesso!");
        return "redirect:/login";
    }

    @PostMapping("reset")
    public GenericResponse resetPassword(HttpServletRequest request,
                                           @RequestParam("email") String email) {

        Usuario usuario = (Usuario) usuarioServiceImpl.loadUserByEmail(email);
        if (usuario == null) {
            throw new UsernameNotFoundException(null);
        }
        String token = UUID.randomUUID().toString();
        usuarioService.createPasswordResetTokenForUser(usuario, token);
        mailSender.send(securityUserService.constructResetTokenEmail("http://localhost:8080/", token, usuario));
        return new GenericResponse("reset password");
    }

    @PostMapping("savePassword")
    public String savePassword(final Locale locale, PasswordDto passwordDto) {

        String result = securityUserService.validatePasswordResetToken(passwordDto.getToken());

        if (result != null) {
            return "redirect:/reset";
        }

        Usuario usuario = securityUserService.getUserByPasswordResetToken(passwordDto.getToken());
        if (usuario != null) {
            usuarioService.changeUserPassword(usuario, passwordDto.getNewPassword());
            return "redirect:/login";
        } else {
            return "redirect:/reset";
        }
    }

    @GetMapping("reset")
    private String reset() {
        return "reset";
    }


    @GetMapping("changePassword")
    public String showChangePasswordPage(Locale locale, Model model,
                                         @RequestParam("token") String token) {
        String result = securityUserService.validatePasswordResetToken(token);
        if (result != null) {
            return "redirect:/login";
        } else {
            model.addAttribute("token", token);
            return "redirect:/updatePassword";
        }
    }

    @GetMapping("updatePassword")
    public String updatePassword() {
        return "updatePassword";
    }

    @GetMapping("meucadastro")
    public String meuCadastro() {
        return "meucadastro";
    }

    @GetMapping("cadastrarse")
    public String cadastrarSe() {
        return "cadastrarse";
    }
}
