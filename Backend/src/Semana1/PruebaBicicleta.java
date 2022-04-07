package Semana1;

public class PruebaBicicleta {
    public static void main(String[] args) {
        def();
    }

    public static void def(){
        Bicicleta biciMontania = new Bicicleta();
        biciMontania.setColor("Negra");
        biciMontania.setPins(6);
        biciMontania.setRodada(26);
        biciMontania.setVelocidad(15.2);
        String msg = "Soy una bici de montaña: ";
        msg += "\nColor " + biciMontania.getColor();
        msg += "\nPins " + biciMontania.getPins();
        msg += "\nRodada " + biciMontania.getRodada();
        msg += "\nVelocidad " + biciMontania.getVelocidad();
        System.out.println(msg);
    }

    public static void show(){

    }

}
