package javaExersizeProjects.treeSet;

public class Book implements Comparable<Book> {

    public String name;
    public int pages;
    public String author;
    public int publicationDate;

    public Book(String name, int pages, String author, int publicationDate) {
        this.name = name;
        this.pages = pages;
        this.author = author;
        this.publicationDate = publicationDate;
    }

    @Override
    public int compareTo(Book o) {
        return getName().compareTo(o.getName());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(int publicationDate) {
        this.publicationDate = publicationDate;
    }
}
