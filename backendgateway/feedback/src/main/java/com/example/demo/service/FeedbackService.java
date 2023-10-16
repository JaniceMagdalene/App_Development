package com.example.demo.service;
import java.util.List;

import com.example.demo.dto.request.FeedbackRequest;
import com.example.demo.dto.response.FeedbackResponse;


public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}