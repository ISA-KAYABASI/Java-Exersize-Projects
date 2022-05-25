package javaExersizeProjects;

import java.util.Scanner;

public class taxiProject {
    public static void main(String[] args) {

    int scannedKm;
    int enterancePrice= 10;
    double perKM = 2.20;

    Scanner kmEmterance = new Scanner(System.in);
    System.out.println("Please enter how many kilometre did you travel with us : ");

    scannedKm =kmEmterance.nextInt();

    double multipleKm = scannedKm*perKM;
    double startPrice = multipleKm+enterancePrice;

    String result=(startPrice<20)?"Please pay 20 dolar.":"Please pay : "+startPrice+ " dolar.";

    System.out.println( result);
}
}
