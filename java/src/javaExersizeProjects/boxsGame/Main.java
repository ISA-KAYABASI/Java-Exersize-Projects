package javaExersizeProjects.boxsGame;

public class Main {
    public static void main(String[] args) {
        Fighter marc = new Fighter("Marc" , 15 , 95, 90, 7);
        Fighter alex = new Fighter("Alex" , 10 , 115, 100, 4);
        Ring r = new Ring(marc,alex , 90 , 100);
        r.run();
    }
}
