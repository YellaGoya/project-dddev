package com.d103.dddev.api.request.repository.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Request1InsertDto {
    @ApiModelProperty(example = "오류")
    private String title;
}