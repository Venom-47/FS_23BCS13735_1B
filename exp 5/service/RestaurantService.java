package com.Cu.FoodHub.model.CuFoodHub.service;

import com.Cu.FoodHub.model.CuFoodHub.entity.Restaurant;
import com.Cu.FoodHub.model.CuFoodHub.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;

    @Autowired
    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    /**
     * Retrieves all restaurant entities from the database.
     * @return A list of all Restaurant objects.
     */
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    // You would add more business methods here (e.g., getRestaurantById, saveRestaurant)
}