package javaExersizeProjects;

import java.util.Scanner;

public class hypotenusCalculate {
    public static void main(String[] args) {
        double a,b,c,hypotenus;
        Scanner input=new Scanner(System.in);
        System.out.println("Please write Edge A: ");
        a= input.nextDouble();
        System.out.println("Please write Edge B: ");
        b= input.nextDouble();
        c=Math.pow(a,2)+Math.pow(b,2);
        hypotenus=Math.sqrt(c);

        System.out.println("Hypotenus: "+hypotenus);
    }
}
