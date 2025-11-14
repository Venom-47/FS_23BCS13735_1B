package com.CuFoodHub.project.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "restaurants") // Mapping to your 'restaurant' table
public class Restaurant {

    @Id // Specifies the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // For auto-incrementing ID
    @Column(name = "id")
    private Integer id;

    // name (varchar(100) - NOT NULL)
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    // category (varchar(50) - NOT NULL)
    @Column(name = "category", length = 50, nullable = false)
    private String category;

    // status (varchar(20) - NOT NULL)
    @Column(name = "status", length = 20, nullable = false)
    private String status;

    // description (text - NULL)
    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    // imageUrl (varchar(2048) - NULL)
    @Column(name = "imageUrl", length = 2048)
    private String imageUrl;

    // imageAlt (varchar(512) - NULL)
    @Column(name = "imageAlt", length = 512)
    private String imageAlt;

    // --- Constructors ---

    // Required No-Argument Constructor for JPA/Hibernate
    public Restaurant() {
    }

    // Optional All-Argument Constructor for convenience
    public Restaurant(String name, String category, String status, String description, String imageUrl, String imageAlt) {
        this.name = name;
        this.category = category;
        this.status = status;
        this.description = description;
        this.imageUrl = imageUrl;
        this.imageAlt = imageAlt;
    }

    // --- Getters and Setters ---

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageAlt() {
        return imageAlt;
    }

    public void setImageAlt(String imageAlt) {
        this.imageAlt = imageAlt;
    }
}