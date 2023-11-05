package com.d103.dddev.api.ground.vo;

import javax.persistence.Column;

import com.d103.dddev.api.file.repository.dto.ProfileDto;
import com.d103.dddev.api.user.repository.dto.UserDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GroundUserVO {
	private Boolean isOwner;
	private Integer userId;
	private ProfileDto profileDto;
	private Integer githubId;
	private String nickname;
	private String statusMsg;
}