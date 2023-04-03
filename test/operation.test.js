import { describe, expect, it } from '@jest/globals'
import calculadora from './operations'



describe('Teste do carrinho de compras', () => {

    it('Operação de soma', () => {
        let resultado = calculadora.sum(180,2300,200.49,49.99,0.00);
        expect(resultado).toEqual(2730.4799999999996)
        
        resultado = calculadora.sum(315.10,559.90,100.90,5200.40,50.90);
        expect(resultado).toEqual(6227.199999999999)

        resultado = calculadora.sum(999.99,3500.23,250.50,697.87,1000.99);
        expect(resultado).toEqual(6449.58)

        resultado = () => calculadora.sum(1,"carlos",1,1,1);
        expect(resultado).toThrow("Não é um número")

        resultado = () => calculadora.sum(1,"minha mãe",1,1,1);
        expect(resultado).toThrow("Não é um número")
        
        resultado = calculadora.sum(0,10,-10,0,0);
        expect(resultado).toEqual(0)
    }
    )
})