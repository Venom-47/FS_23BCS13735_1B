package com.Cu.FoodHub.model.CuFoodHub.repository;

import com.Cu.FoodHub.model.CuFoodHub.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// The interface extends JpaRepository<EntityClass, PrimaryKeyType>
@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    // Spring Data JPA automatically provides methods like:
    // findAll(), findById(), save(), delete()
}