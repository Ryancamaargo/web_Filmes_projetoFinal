package utfpr.edu.br.web_Filmes_projetoFinal.senha;

import lombok.Data;

@Data
public class PasswordDto {

    private String oldPassword;

    private String token;

    private String newPassword;

}
