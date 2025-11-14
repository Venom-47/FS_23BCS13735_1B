package com.Cu.FoodHub.model.CuFoodHub.controller;

import com.Cu.FoodHub.model.CuFoodHub.entity.Restaurant;
import com.Cu.FoodHub.model.CuFoodHub.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController // Combines @Controller and @ResponseBody
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/restaurants") // Base URL for all endpoints in this controller
public class RestaurantController {

    private final RestaurantService restaurantService;

    @Autowired
    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    /**
     * GET /api/restaurants
     * Fetches all restaurants and returns them as JSON.
     * @return A list of Restaurant objects.
     */
    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }
}