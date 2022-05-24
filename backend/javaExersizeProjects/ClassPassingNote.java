package javaExersizeProjects;

import java.util.Scanner;

public class ClassPassingNote {
        public static void main(String[] args) {

            int math, physics,chemistry , turkish, history, music;

            Scanner input = new Scanner(System.in);

            System.out.println("Enter your Math Grade");
            math = input.nextInt();

            System.out.println("Enter your Physics Grade");
            physics = input.nextInt();

            System.out.println("Enter your Chemistry Grade");
            chemistry = input.nextInt();

            System.out.println("Enter your Turkish Grade");
            turkish = input.nextInt();

            System.out.println("Enter your History Grade");
            history = input.nextInt();

            System.out.println("Enter your Music Grade");
            music = input.nextInt();

            int total = math + physics + chemistry + turkish + history + music ;

            double gpe = total / 6.0;
            System.out.println(gpe);

            String result=(gpe>=60)? " you passed the exam  ":" you failed the exam  ";
            System.out.println(result);

        }
    }
