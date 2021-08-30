package utfpr.edu.br.web_Filmes_projetoFinal.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = {"id"})
public class Usuario implements Serializable, 
								UserDetails{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 255, nullable = false)
	private String nome;
	
	@Column(length = 100, nullable = false)
	private String username;

	@Column(length = 25, nullable = false)
	private String cpfcnpj;


	@Column(length = 25, nullable = false)
	private String tel;

	@Column(length = 25, nullable = false)
	private String cep;

	@Column(length = 25, nullable = false)
	private String cidade;

	@Column(length = 25, nullable = false)
	private String uf;

	@Column(length = 25, nullable = false)
	private String bairro;

	@Column(length = 25, nullable = false)
	private String rua;

	@Column(length = 25, nullable = false)
	private String numero;


	@Column(length = 150, nullable = false)
	private String email;
	
	@Column(length = 1024, nullable = false)
	private String password;
	
	@ManyToMany(cascade = CascadeType.ALL, 
			fetch = FetchType.EAGER)
	private Set<Permissao> permissoes;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> list = new ArrayList<>();
		list.addAll(permissoes);
		return list;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
	
}




