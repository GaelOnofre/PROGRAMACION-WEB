#Calculadora para resolver y graficar ecuaciones cuadraticas
#Gael Onofre García #23100190
from numpy import sqrt
from sympy.plotting import *
from sympy import *

#ax2 + bx + c = 0

def raices(a,b,c):
    D = sqrt(b*b-4*a*c)
    x1 = (-b + D)/(2*a)
    x2 = (-b - D)/(2*a)

    print("La primera raíz es: ", x1)
    print("La segunda raíz es:", x2)

def grafica(a,b,c):
    x = Symbol('x')
    plot(a*x**2 + b*x + c)

if __name__ == "__main__":
    while True:
        print("Bienvenid a la calculadora y graficadora cuadrática")
        a = input("Ingrese el valor de a: ")
        b = input("Ingrese el valor de b: ")
        c = input("Ingrese el valor de c: ")

        raices(float(a),float(b),float(c))
        grafica(float(a),float(b),float(c))

        finalizado = input("Quieres resolver otra ecuacion cuadrática? (s/n) ")
        if finalizado == "n":
            print("lmao")
            break
