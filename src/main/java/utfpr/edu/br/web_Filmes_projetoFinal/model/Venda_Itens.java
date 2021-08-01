package utfpr.edu.br.web_Filmes_projetoFinal.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
//import javax.validation.constraints.NotEmpty;

@Entity
@Data
@Table(name="venda_Itens")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = {"id"})
public class Venda_Itens {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "venda_id", referencedColumnName = "id")
    private Venda venda;

    @ManyToOne
    @JoinColumn(name = "item_id", referencedColumnName = "id")
    @JoinColumn(name = "item_preco_promocao", referencedColumnName = "preco_promocao")
    private Itens itens;
//
//    @NotEmpty(message = "A quantidade deve ser preenchido.")
    @Column(name = "quantidade")
    private int quantidade;

//    @NotEmpty(message = "O total produtos deve ser preenchido.")
    @Column(name = "total_produto")
    private Double total_produto;


}
/*

    @NotNull(message = "O campo valor não pode ser nulo.")
    @Column(nullable = false)
    private Double valor;
*/

    /*@ManyToOne
    @JoinColumn(name = "categoria_id", referencedColumnName = "id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "marca_id", referencedColumnName = "id")
    private Marca marca;*/


/*

package br.edu.utfpr.trabalhoFinalWeb.model;

        import lombok.*;

        import javax.persistence.*;

@Entity
@Table(name="USUARIO")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "idUsuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_USUARIO")
    private Long idUsuario;

    @Column(name = "NOME")
    private String nome;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;
}
*/
