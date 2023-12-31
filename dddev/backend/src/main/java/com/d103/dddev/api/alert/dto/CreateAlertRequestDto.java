package com.d103.dddev.api.alert.dto;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter @Setter @ToString
public class CreateAlertRequestDto {
	private Integer groundId;
	private List<String> keyword;
	private String type;
}
