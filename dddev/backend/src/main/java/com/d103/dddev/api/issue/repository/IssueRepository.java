package com.d103.dddev.api.issue.repository;

import com.d103.dddev.api.issue.model.document.Issue;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public interface IssueRepository extends MongoRepository<Issue, String> {
    ArrayList<Issue> findAllByGroundIdAndType(Integer groundId, String type);

    Optional<Issue> findByGroundIdAndId(Integer groundId, String targetId);

	Optional<Issue> findByGroundIdAndUnclassifiedAndType(Integer groundId, boolean unclassified, String type);

	ArrayList<Issue> findAllByGroundIdAndParentIdAndType(Integer groundId, String parentId, String type);
	List<Issue> findBySprintIdAndStatus(Integer sprintId, Integer status);
	List<Issue> findBySprintId(Integer sprintId);
	void deleteByGroundId(int groundId);

	// 스프린트의 모든 focus time 이슈 불러오기
	@Query("{ 'sprint_id' : ?0, 'focus_time' : { $gt : 0 } }")
	List<Issue> getSprintFocusIssueList(Integer sprintId);

	// 스프린트의 모든 active time 이슈 불러오기
	@Query("{ 'sprint_id': ?0, 'active_time' : { $gt : 0 } }")
	List<Issue> getSprintActiveIssueList(Integer sprintId);

	// 스프린트의 완료된 집중시간 이슈 리스트 불러오기
	@Query("{ 'sprint_id' : ?0, 'status' : 2, 'focus_time' : { $gt : 0 } }")
	List<Issue> findFocusTimeDone(Integer sprintId);

	// 스프린트의 완료된 집중시간 정렬해서 불러오기
	@Query("{ 'sprint_id' : ?0, 'status' : 2, 'focus_time' : { $gt : 0 } }")
	List<Issue> findFocusTimeDone(Integer sprintId, Sort sort);

	// 스프린트의 미완료된 집중시간 불러오기
	@Query("{ 'sprint_id' : ?0, 'status' : { $gt : 0, $lt : 2 }, 'focus_time' : { $gt : 0 } }")
	List<Issue> findFocusTimeUndone(Integer sprintId);

	// 스프린트의 완료된 연구시간 불러오기
	@Query("{ 'sprint_id' : ?0, 'status' : 2, 'active_time' : { $gt : 0 } }")
	List<Issue> findActiveTimeDone(Integer sprintId);

	// 스프린트의 미완료된 연구시간 불러오기
	@Query("{ 'sprint_id' : ?0, 'status' : { $gt : 0, $lt : 2 }, 'active_time' : { $gt : 0 } }")
	List<Issue> findActiveTimeUndone(Integer sprintId);

	// 스프린트의 완료된 집중시간 개수 불러오기
	@Query(value = "{ 'sprint_id' : ?0, 'status' : 2, 'focus_time' : { $gt : 0 } }", count = true)
	Integer findFocusTimeDoneCount(Integer sprintId);

	// 스프린트의 미완료된 집중시간 개수 불러오기
	@Query(value = "{ 'sprint_id' : ?0, 'status' : { $gt : 0, $lt : 2 }, 'focus_time' : { $gt : 0 } }", count = true)
	Integer findFocusTimeUndoneCount(Integer sprintId);

	// 스프린트의 완료된 연구시간 개수 불러오기
	@Query(value = "{ 'sprint_id' : ?0, 'status' : 2, 'active_time' : { $gt : 0 } }", count = true)
	Integer findActiveTimeDoneCount(Integer sprintId);

	// 스프린트의 미완료된 연구시간 개수 불러오기
	@Query(value = "{ 'sprint_id' : ?0, 'status' : { $gt : 0, $lt : 2 }, 'active_time' : { $gt : 0 } }", count = true)
	Integer findActiveTimeUndoneCount(Integer sprintId);

    ArrayList<Issue> findAllByGroundIdAndSprintIdAndType(Integer groundId, Integer sprintId, String issue);

	ArrayList<Issue> findAllByGroundIdAndSprintIdAndTypeAndStatus(Integer groundId, int sprintId, String issue, int Status);
}
