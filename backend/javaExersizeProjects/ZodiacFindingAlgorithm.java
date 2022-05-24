package javaExersizeProjects;

import java.util.Scanner;

public class ZodiacFindingAlgorithm {
    public static void main(String[] args) {
        int mount, day;

        Scanner scan = new Scanner(System.in);
        System.out.println("Please enter your birth month : ");
        mount = scan.nextInt();

        System.out.println("Please enter your birth day : ");
        day = scan.nextInt();

        switch (mount){
            case 1:
                if (day<=21) {
                    System.out.println("Your zodiac is capricorn");
                }else System.out.println("Your zodiac is aquarius ");
                break;
            case 2:
                if (day<=19) {
                    System.out.println("Your zodiac is aquarius ");
                }else System.out.println("Your zodiac is pisces ");
                break;
            case 3:
                if (day<=20) {
                    System.out.println("Your zodiac is pisces ");
                }else System.out.println("Your zodiac is aries ");
                break;
            case 4:
                if (day<=20) {
                    System.out.println("Your zodiac is aries ");
                }else System.out.println("Your zodiac is taurus ");
                break;
            case 5:
                if (day<=21) {
                    System.out.println("Your zodiac is taurus ");
                }else System.out.println("Your zodiac is gemini ");
                break;
            case 6:
                if (day<=22) {
                    System.out.println("Your zodiac is gemini ");
                }else System.out.println("Your zodiac is cancer ");
                break;
            case 7:
                if (day<=22) {
                    System.out.println("Your zodiac is cancer ");
                }else System.out.println("Your zodiac is leo ");
                break;
            case 8:
                if (day<=22) {
                    System.out.println("Your zodiac is leo ");
                }else System.out.println("Your zodiac is virgo ");
                break;
            case 9:
                if (day<=22) {
                    System.out.println("Your zodiac is virgo ");
                }else System.out.println("Your zodiac is libra ");
                break;
            case 10:
                if (day<=22) {
                    System.out.println("Your zodiac is libra ");
                }else System.out.println("Your zodiac is scorpio ");
                break;
            case 11:
                if (day<=21) {
                    System.out.println("Your zodiac is scorpio ");
                }else System.out.println("Your zodiac is sagittarius ");
                break;
            case 12:
                if (day<=21) {
                    System.out.println("Your zodiac is sagittarius ");
                }else System.out.println("Your zodiac is capricorn ");
                break;

            default:
                System.out.println("Please enter a valid month number!");

        }
    }
}
