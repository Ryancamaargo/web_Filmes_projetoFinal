package utfpr.edu.br.web_Filmes_projetoFinal.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
//import javax.validation.constraints.NotEmpty;

@Entity
@Data
@Table(name = "venda_Itens")
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
    @JoinColumn(name = "itens_id", referencedColumnName = "id")
    private Itens itens;


    @Column(name = "quantidade")
    private Integer quantidade;





}