package javaExersizeProjects.StreamAndLambda;

import java.util.ArrayList;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {

        ArrayList<Book> booksList = new ArrayList<>();          //Book list holder
        HashMap<String, String> mapList = new HashMap<>();     // Book name and author holder
        ArrayList<Book> newList = new ArrayList<>();

        booksList.add(new Book("kral", 43, "mediyo"));
        booksList.add(new Book("Kalın", 123, "banane"));
        booksList.add(new Book("Asena", 243, "furkan"));
        booksList.add(new Book("Ince", 521, "subay"));
        booksList.add(new Book("Duzgun", 123, "faruk"));
        booksList.add(new Book("Yuvarlak", 543, "donkisot"));
        booksList.add(new Book("Ev", 732, "tuba"));
        booksList.add(new Book("Daire", 24, "ela"));
        booksList.add(new Book("Arsa", 12, "omer"));
        booksList.add(new Book("Yazilim", 2319, "sakine"));


        booksList.stream().forEach(book -> {
            mapList.put(book.getName(), book.getAuthor());
        });
        for (String str : mapList.keySet()) {
            System.out.println("Book Name :\t" + str + "\t Book Author :\t" + mapList.get(str));
        }
        booksList.stream().filter(book -> book.getPageNumber() > 100).forEach(book -> newList.add(book));
        System.out.println("*****************************");
        newList.forEach(book -> System.out.println("Book name :\t" + book.getName() + ", \t Kitabin yazari:\t" + book.getAuthor()));

    }
}
