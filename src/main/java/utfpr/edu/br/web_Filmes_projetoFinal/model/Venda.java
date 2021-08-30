package utfpr.edu.br.web_Filmes_projetoFinal.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name="venda")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = {"id"})
public class Venda {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "data")
    private Date data;

    @Column(name = "tipo_pagamento")
    private String tipo_pagamento;


    @ManyToOne()
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Venda_Itens> vendaItens;


}