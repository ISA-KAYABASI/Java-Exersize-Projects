package javaExersizeProjects;

import java.util.Scanner;

public class bodyMassIndexCalculation {
    public static void main(String[] args) {
        double height;
        double weight;
        double bodyMass;

        Scanner scannedH = new Scanner(System.in);
        System.out.println("Enter height please");


        height=scannedH.nextDouble();
        System.out.println("height = " + height);

        System.out.println("Enter weight please");
        weight=scannedH.nextDouble();
        System.out.println("weight = " + weight);

        bodyMass=weight/(height*height);
        System.out.println("bodyMass = " + bodyMass);

    }
}
