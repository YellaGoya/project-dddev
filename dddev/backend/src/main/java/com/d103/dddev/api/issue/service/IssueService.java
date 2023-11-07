package com.d103.dddev.api.issue.service;

import java.util.List;
import java.util.Map;

import com.d103.dddev.api.issue.model.dto.IssueDto;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public interface IssueService  {

    IssueDto.Create.Response issueCreate(String groundId, IssueDto.Create.Request request, UserDetails userDetails);

    IssueDto.List.Response issueList(String groundId, String checkId);

    IssueDto.Detail.Response issueDetail(String groundId, String issueId);

    IssueDto.Delete.Response issueDelete(String issueId);

    IssueDto.Content.Response issueContent(IssueDto.Content.Request request, String issueId, UserDetails userDetails);

    IssueDto.Status.Response issueStatus(IssueDto.Status.Request request, String issueId, UserDetails userDetails);

    IssueDto.Connect.Response issueConnect(IssueDto.Connect.Request request, String issueId, UserDetails userDetails);

    IssueDto.Time.Response issueTime(IssueDto.Time.Request request, String issueId, UserDetails userDetails);

    IssueDto.Sprint.Response issueSprint(IssueDto.Sprint.Request request, String issueId, UserDetails userDetails);

    Map<String, Integer> getGroundFocusTime(Integer groundId, Integer sprintId) throws Exception;
    Map<String, Integer> getGroundActiveTime(Integer groundId, Integer sprintId) throws Exception;
}
