package javaExersizeProjects;

import java.util.Scanner;

public class PasswordAndUsernameControl {
    public static void main(String[] args) {
        while (1 == 1){
            String userame, password, result, controlSame;

            Scanner ent = new Scanner(System.in);

            System.out.println("Please enter username : ");
            userame = ent.next();
            System.out.println("Please enter password : ");
            password = ent.next();


            //String name = case.equals("uppercase") ? "JOHN" : "john";

            if (userame.equals("jesus") && password.equals("jesus12345")) {
                System.out.println("Welcome back to server");
                break;

            } else if (!userame.equals("jesus") && password.equals("jesus12345")) {
                System.out.println("Username is invalid");

            } else if (userame.equals("jesus") && !password.equals("jesus12345")) {
                System.out.println("Password is invalid try again");
            }else System.out.println("Informations is invalid try again");


    }
    }
}
