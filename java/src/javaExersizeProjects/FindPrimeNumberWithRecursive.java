package javaExersizeProjects;

import java.util.Scanner;

public class FindPrimeNumberWithRecursive {

        static void primeNumber(int number, int x){

            if (x == number){
                System.out.println(number + " sayisi asal sayidir.");
                return;
            }else if (number % x == 0){
                System.out.println(number + "  sayisi asal sayi degildir.");
                return ;
            }
            primeNumber(number,x + 1);

        }

        public static void main(String[] args) {

            Scanner scanner = new Scanner(System.in);
            System.out.print("Please enter a number : ");
            int number=scanner.nextInt();
            primeNumber(number,2);
        }
}

