package utfpr.edu.br.web_Filmes_projetoFinal.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import utfpr.edu.br.web_Filmes_projetoFinal.model.PasswordResetToken;
import utfpr.edu.br.web_Filmes_projetoFinal.model.Usuario;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.PasswordTokenRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.PermissaoRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.repository.UsuarioRepository;
import utfpr.edu.br.web_Filmes_projetoFinal.service.UsuarioService;

import java.util.Set;


@Service
public class UsuarioServiceImpl extends CrudServiceImpl<Usuario, Long>
		implements UsuarioService, UserDetailsService{

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private PasswordTokenRepository passwordTokenRepository;

	@Autowired
	private PermissaoRepository permissaoRepository;

	@Override
	protected JpaRepository<Usuario, Long> getRepository() {
		return usuarioRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = this.usuarioRepository.findByUsername(username);
		if (usuario == null) {
			throw new UsernameNotFoundException("Usuário não encontrado");
		}
		return usuario;
	}
	@Override
	public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException {
		Usuario usuario = this.usuarioRepository.findByEmail(email);
		if (usuario == null) {
			throw new UsernameNotFoundException("Usuário não encontrado");
		}
		return usuario;
	}
	@Override
	public void createPasswordResetTokenForUser(Usuario usuario, String token) {
		PasswordResetToken myToken = new PasswordResetToken(token, usuario);
		passwordTokenRepository.save(myToken);
	}

	@Override
	public void changeUserPassword(Usuario usuario, String newPassword){
		usuario.setPassword(encoder.encode(newPassword));
		super.save(usuario);
	}

	@Override
	public Usuario save(Usuario entity) {
		entity.setPassword(encoder.encode(entity.getPassword()));
		entity.setPermissoes(Set.of(permissaoRepository.findByNome("ROLE_USER")));
		return super.save(entity);
	}
}
