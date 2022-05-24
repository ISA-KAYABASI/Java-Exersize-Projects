package javaExersizeProjects;

import java.util.Scanner;

public class TempratureActivitesSuggestion {
    public static void main(String[] args) {

        Scanner scan=new Scanner(System.in);
        System.out.println("Please enter a weather degree : ");

        int degre=scan.nextInt();

        if (degre<5) {
            System.out.println("It's cold weather and right now really good for playing snow ball :)");
        } else if (degre>5 && degre<10) {
            System.out.println("It's a perfect day for ciname and get meeting with your friend");
        } else if (degre>10 && degre<15) {
            System.out.println("it' nice day now we can go to cinema or we can go to picnic");
        } else if (degre>15 && degre<25) {
            System.out.println("Perfect weather for going picnic with your family lets go!");
        }else if (degre >25) {
            System.out.println("It is so hot we shoul go to swim and get relaxed.");
        }else System.out.println("please enter a valid weather degree !");
    }
}
