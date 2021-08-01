package utfpr.edu.br.web_Filmes_projetoFinal;

import nz.net.ultraq.thymeleaf.LayoutDialect;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WebFilmesProjetoFinalApplication {



	public static void main(String[] args) {
		SpringApplication.run(WebFilmesProjetoFinalApplication.class, args);
	}

	@Bean
	public LayoutDialect layoutDialect() {
		return new LayoutDialect();
	}

}
