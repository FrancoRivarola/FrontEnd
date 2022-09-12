package com.portfolio.fhr.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud (min = 1, max = 50)")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 50, message = "No cumple con la longitud (min = 1, max = 50)")
    private String apellido;
    
    @Size(min = 1, max = 50, message = "No cumple con la longitud (min = 1, max = 50)")
    private String img;

    public Long getId() {
        return Id;
    }

    public void setId(Long Id){
        this.Id = Id;
    }

    public String getnombre(){
        return nombre;
    }

    public void setnombre (String nombre){
        this.nombre = nombre;
    }

    public String getapellido() {
        return apellido;
    }

    public void setapellido(String apellido) {
        this.apellido = apellido;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
    
    
}
