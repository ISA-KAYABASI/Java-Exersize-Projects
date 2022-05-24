package javaExersizeProjects;

import java.util.Scanner;

public class circleCalculationProject {

    public static void main(String[] args) {
        int i;
        double pi = 3.14;

        Scanner index =new Scanner(System.in);

        i=index.nextInt();

        double area = pi*i*i;
        double circumference = 2*pi*i;

        System.out.println("area = " + area);
        System.out.println("circumference = " + circumference);
    }
}
