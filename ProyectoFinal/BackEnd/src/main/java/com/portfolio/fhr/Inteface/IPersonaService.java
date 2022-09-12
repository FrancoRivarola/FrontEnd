package com.portfolio.fhr.Inteface;

import com.portfolio.fhr.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    public List<Persona> getPersona();
    
    public void savePersona (Persona persona);
    
    public void deletePersona (Long Id);
    
    public Persona findPersona (Long Id);
}
