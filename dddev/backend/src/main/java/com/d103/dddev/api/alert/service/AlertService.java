package com.d103.dddev.api.alert.service;

import java.util.List;
import java.util.Map;

import com.d103.dddev.api.alert.dto.AlertResponseDto;
import com.d103.dddev.api.alert.dto.CreateWebhookResponseDto;
import com.d103.dddev.api.alert.dto.PushWebhookDto;
import com.d103.dddev.api.alert.dto.UpdateAlertDto;
import com.d103.dddev.api.alert.dto.PullRequestWebhookDto;
import com.d103.dddev.api.repository.repository.entity.Repository;
import com.d103.dddev.api.user.repository.entity.User;

public interface AlertService {
	void initAlert(User user, Repository repository, String type) throws Exception;

	AlertResponseDto createAlert(Integer groundId, String header, Repository repository, List<String> keyword, String type) throws Exception;

	CreateWebhookResponseDto createWebhook(User user, Repository repository,
		String type, String url) throws Exception;

	void receivePushWebhook(Map<String, Object> headerMap, PushWebhookDto pushWebhookDto) throws Exception;

	AlertResponseDto updateAlert(User user, UpdateAlertDto updateAlertDto, Integer groundId) throws Exception;

	List<AlertResponseDto> alertList(User user) throws Exception;

	AlertResponseDto deleteAlert(User user, Integer alertId, Integer groundId) throws Exception;

	void receivePullRequestWebhook(Map<String, Object> headerMap, PullRequestWebhookDto pullRequestWebhookDto) throws Exception;

	void deleteWebhook(User user, Repository repository) throws Exception;

	AlertResponseDto getAlert(User user, Integer groundId) throws Exception;
}
